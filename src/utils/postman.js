import { v4 as uuidv4 }  from 'uuid'
import _ from 'lodash'
import beautify from 'json-beautify'

class Postman {
  workspace = {}
  folders = {}
  requests = {}
  environments = {}

  postman_folders = []
  postman_requests =[]
  postman_environments = []

  constructor(fileData) {
    const data = JSON.parse(fileData)
    for (const res of data['resources']) {
      if(res['_type'] == "workspace") {
        this.workspace = {name: res['name'], description: res['description'], _id: res['_id'], id: uuidv4()}
      }
      if(res['_type'] == "request_group") {
        this.folders[res['_id']] =  {name: res['name'], description: res['description'], parent_id: res['parentId'], id: uuidv4()}
      }
      if(res['_type'] == "request") {
        this.requests[res['_id']] =  {
          name: res['name'],
          url: res['url'],
          method: res['method'],
          headers: res['headers'],
          body: res['body'],
          parameters: res['parameters'],
          parent_id: res['parentId'],
          id: uuidv4()
        }
      }
      if(res["_type"] == "environment"){
        this.environments[res['_id']] = {name: res['name'], data: res['data'], parent_id: res['parentId'], id: uuidv4() }
      }
    }
    this.parseRequests()
    this.parseEnvironments()
  }

  parseRequests() {
    let folders_order = {}
    let parent_id = null
    let request_data = null
    for(const [key, value] of Object.entries(this.folders)) {
      parent_id =  this.folders[value['parent_id']] ? this.folders[value['parent_id']]['id'] : null
      var folder_data = {
        id: value['id'],
        name: value['name'],
        description: value['description'],
        folder: parent_id
      }
      this.postman_folders.push(folder_data)
      if(parent_id){
        if(_.isEmpty(folders_order[parent_id])) {
          folders_order[parent_id]= [value['id']]
        } else {
          folders_order[parent_id].push(value['id'])
        }
      }
    }

    let requests_order = {}
    for(const [key, value] of Object.entries(this.requests)) {
      parent_id = this.folders[value['parent_id']] ? this.folders[value['parent_id']]['id'] : null
      var header_data = []

      for(const h of value['headers']) {
        header_data.push({
          key: h["name"],
          value: h["value"],
          type: "text",
          enabled: true
        })
      }

      var body_data= []

      if(value['body']["mimeType"] == "multipart/form-data") {
        data_mode = "params"
        for(const b of value['body']["params"]) {
          body_data.push({
            key: b["name"],
            value: b["value"],
            enabled: !b["disabled"]
          })
        }
      }

      if(value['body']["mimeType"] == "application/json") {
        var data_mode = "raw"
        var data_options = {
          raw: {language: "json"}
        }
        var raw_data = value['body']["text"]
      }

      var params = []

      for( const pa of value['parameters']) {
        params.push({key: pa["name"], value: pa["value"]})
      }

      request_data = {
        id: value['id'],
        name: value['name'],
        url: value['url'],
        method: value['method'],
        headerData: header_data,
        folder: parent_id,
        data: body_data,
        dataMode: data_mode,
        dataOptions: data_options,
        rawModeData: raw_data,
        queryParams: params
      }
      this.postman_requests.push(request_data)
      if(parent_id) {
        if(_.isEmpty(requests_order[parent_id])){
          requests_order[parent_id]= [value['id']]
        } else {
          requests_order[parent_id].push(value['id'])
        }
      }
    }
    for(const f of this.postman_folders) {
      f["folders_order"] = folders_order[f["id"]] || []
      f["order"] = requests_order[f["id"]] || []
    }
  }

  parseEnvironments() {
    for( const [key, value] of Object.entries(this.environments)) {
      var values = []
      if(!_.isEmpty(value['data'])){
        for(let [k, v] of Object.entries(value['data'])) {
          values.push({key: k, value: v, enabled: true})
        }
        this.postman_environments.push({ id: value['id'], name: value['name'], values: values })
      }
    }
  }

  toFile() {
    let postman_data = {version: 1, collections: [], environments: this.postman_environments}
    postman_data['collections'].push({
      id: this.workspace['id'],
      name: this.workspace['name'],
      description: this.workspace['description'],
      folders: this.postman_folders,
      requests: this.postman_requests
    })
    const result = beautify(postman_data, null, 2, 80)
    console.log(postman_data)
    return result
  }
}
export default Postman
