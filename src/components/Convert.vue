<template>
  <section>
    <b-field>
      <b-upload v-model="file" drag-drop class="upload-field" :input='fileChange'>
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon
                icon="upload"
                size="is-large">
              </b-icon>
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
      </b-upload>
    </b-field>
    <div class="card result-card" v-if="!_.isNull(file)">
      <div class="card-content">
        <div class="content">
          Nice! We have successfully converted your file
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="downloadFile('postman')"><b-icon icon="download" />Postman</a>
        <a href="#" class="card-footer-item"><b-icon icon="download"/>Insomnia</a>
      </footer>
    </div>
  </section>
</template>

<script>
  import _ from 'lodash'
import Postman from '../utils/postman'
export default {
  name: 'Convert',
  data() {
    return {
      file: null
    }
  },
  computed: {
    _() {
      return _
    }
  },
  methods: {
    downloadFile(type) {
      const reader = new FileReader()
      reader.onload = (evt) => {
        const data = evt.target.result
        let parsedData
        if(type == "postman") {
          parsedData = new Postman(data)
        }
        const url = window.URL.createObjectURL(new Blob([parsedData.toFile()], { type: 'application/json' }))
        const link = document.createElement('a')
        link.href =  url
        link.setAttribute('download', 'Backup.postman_dump.json')
        link.click()
      };
      reader.readAsText(this.file);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result-card {
  margin: 10px auto 0;
  max-width: 500px;
}
</style>
