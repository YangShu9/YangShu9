<template>
  <div>
    <input type="input" />
  </div>
</template>

<script>
import axios from 'axios'
// import $ from 'jquery'
export default {
  components: {},
  data () {
    return {
      OKsite: []
    }
  },
  computed: {},
  created () {
    this.init()
  },
  mounted () {},
  methods: {
    init () {
      var params = {
        'id': '1',
        'date': '2021-12-15'
      } // 1是A区,4是C区
      axios.post('/plan/index/list', params, {
        headers: {
          'token': 'ff81ec4f-a68c-491a-b896-904066aa41d5' // 也是在本地中拿到token
        }
      }).then(response => {
        if (response.data.data.list) {
          // console.log('list', response.data.data.list)
          var ages = [3, 10, 18, 20]

          function checkAdult (age) {
            return age >= 18
          }
          function myFunction () {
            document.getElementById('demo').innerHTML = ages.find(checkAdult)
          }

          response.data.data.list.forEach(li => {
            for (let item in li.list) {
              // console.log('item', li.list[item], li.list[Number(item) + 1])
              if (li.list[item].hour === 16) {
                if (!li.list[item].isUse && !li.list[Number(item) + 1].isUse) {
                  console.log('fuhe', li.list[item])
                  this.OKsite.push(li.list[item], li.list[Number(item) + 1])
                  return
                }
              }
            }
          })
        }
      }).catch(error => {
        console.log(error)
      })
      // function getList (data) {
      //   debugger
      // }
      // $.ajax({
      //   url: 'https://whgapi.tiger-ego.com/plan/index/list',
      //   type: 'get',
      //   dataType: 'jsonp', // 请求方式为jsonp
      //   jsonpCallback: 'getList', // 自定义回调函数名
      //   // data: {},
      //   success: function (result) {
      //     console.log('result', result)
      //     debugger
      //   },
      //   error: function (jqXHR, textStatus, errorThrown) {
      //     /* 错误信息处理 */
      //     debugger
      //   }
      // })
    }
  }
}
</script>
<style scoped>
</style>
