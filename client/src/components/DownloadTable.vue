<template>
    <div class="download-table">
      <table class="table table-striped table-bordered table-hover">
        <colgroup>
          <col style="width: 20%;">
          <col style="width: 30%;">
          <col style="width: 30%;">
          <col style="width: 20%;">
        </colgroup>
        <thead class="thead-dark">
          <tr>
            <th class="text-center">版本号</th>
            <th class="text-center">发布日期</th>
            <th class="text-center">发布日志</th>
            <th class="text-center">下载</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(release, index) in releases" :key="index">
            <td class="text-center">{{ release.version }}</td>
            <td class="text-center">{{ release.date }}</td>
            <td class="text-center">
              <a :href="release.releaseLog" class="d-flex justify-content-center" target="_blank">Release Notes</a>
            </td>
            <td class="text-center">
              <a :href="release.downloadUrl" class="btn btn-primary d-flex justify-content-center" target="_blank">
                <i class="fa fa-download mr-2"></i> Download
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        releases: [
          {
            version: "3.10.0",
            date: "October 4, 2021",
            releaseLog: "https://docs.python.org/3/whatsnew/3.10.html",
            downloadUrl: "https://www.python.org/ftp/python/3.10.0/python-3.10.0-amd64.exe"
          },
          {
            version: "3.9.0",
            date: "October 5, 2020",
            releaseLog: "https://docs.python.org/3/whatsnew/3.9.html",
            downloadUrl: "https://www.python.org/ftp/python/3.9.0/python-3.9.0-amd64.exe"
          },
          {
            version: "3.8.0",
            date: "October 14, 2019",
            releaseLog: "https://docs.python.org/3/whatsnew/3.8.html",
            downloadUrl: "https://www.python.org/ftp/python/3.8.0/python-3.8.0-amd64.exe"
          },
          {
            version: "3.7.0",
            date: "June 27, 2018",
            releaseLog: "https://docs.python.org/3/whatsnew/3.7.html",
            downloadUrl: "https://www.python.org/ftp/python/3.7.0/python-3.7.0-amd64.exe"
          },
          {
            version: "3.6.0",
            date: "December 23, 2016",
            releaseLog: "https://docs.python.org/3/whatsnew/3.6.html",
            downloadUrl: "https://www.python.org/ftp/python/3.6.0/python-3.6.0-amd64.exe"
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .download-table {
    margin: 20px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  td, th {
    vertical-align: middle; /* Align text in the middle vertically */
  }
  
  a.d-flex {
    display: flex; /* Make links behave like a flex container */
    justify-content: center; /* Center the content horizontally */
  }
  </style>
  