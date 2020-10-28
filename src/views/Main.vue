<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px;margin: fill">
      <el-row >
        <el-button type="primary" icon="el-icon-lightning" round></el-button>
        <el-button type="success" icon="el-icon-moon" round></el-button>
        <el-button type="info" icon="el-icon-wind-power" round></el-button>
        <el-button type="warning" icon="el-icon-sunrise" round></el-button>
        <el-button type="danger" icon="el-icon-loading" round></el-button>
      </el-row>
<!--      <el-dropdown>-->
<!--        <i class="el-icon-setting" style="margin-right:15px"></i>-->
<!--        <el-dropdown-menu slot="dropdown">-->
<!--          <el-dropdown-item>个人信息</el-dropdown-item>-->
<!--          <el-dropdown-item>退出登录</el-dropdown-item>-->
<!--        </el-dropdown-menu>-->
<!--      </el-dropdown>-->
    </el-header>

    <el-main>
      <div class="block">
        <span class="demonstration" ></span>
        <el-select v-model="value2" placeholder="请选择" @change="setPic" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>

        </el-select>
        <img :src="imgsrc" />
<!--        <el-cascader-->
<!--          v-model="valueArray"-->
<!--          placeholder="请选择天气类型"-->
<!--          @change="setPic"-->
<!--          :options="options" filterable>-->
<!--        </el-cascader>-->

        <span class="demonstration"></span>
        <el-date-picker
          value-format="yyyyMMdd"
          v-model="value1"
          type="datetime"
          size="large "
          placeholder="选择日期时间"
          @change="setDate"
          :picker-options="pickerOptions">
        </el-date-picker>

        <!--          //点击图片查看大图-->
<!--        <el-button type="primary" @click="runPicture" class="run">查看</el-button>-->
<!--        <div class="avatar">-->
<!--          <img :src="formData.avatar" alt="" style="width: 55%">-->
<!--        </div>-->
      </div>
      <router-view/>

    </el-main>

    <el-footer>
      <div class="block1" >
        <span class="demonstration"></span>
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
      <router-view/>
    </el-footer>

  </el-container>



</template>

<!--<script type="text/ecmascript-6">-->
<script type="text/javascript">

  import axios from 'axios'
  import qs from 'qs'
  import { getPicture } from "@/api/picture";
  export default {
    name: "Main",
    //图片查看
    data() {
      return {
        runData: {
          picture_date: "",
          picture_class: "",

        },
        imgsrc: require("@/assets/3.jpg"),
        //日历
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',

        //联级框
        // selected: null,
        items: [],
        options: [{
          value: 'NH4',
          label: 'NH4'
        }, {
          value: 'NO3',
          label: 'NO3'
        }, {
          value: 'PO4',
          label: 'PO4'
        }, {
          value: 'SiOH',
          label: 'SiOH'
        }, {
          value: 'SSH',
          label: 'SSH'
        },
          {
            value: 'SST',
            label: 'SST'
          },
          {
            value: 'Z1_C',
            label: 'Z1_C'
          },
          {
            value: 'Z1_N',
            label: 'Z1_N'
          },
          {
            value: 'Z2_C',
            label: 'Z2_C'
          },
          {
            value: 'Z2_N',
            label: 'Z2_N'
          },
        ],
        value2: '',
      }
    },
      methods: {
        setDate() {
          this.$store.state.domainDate = this.value1;
        }
        ,
        async setPic() {
          this.$store.state.pictureCLass = this.value2;
          this.runData.picture_date = this.$store.state.domainDate;
          this.runData.picture_class = this.$store.state.pictureCLass;
          console.log(this.runData.picture_date, '3');
          console.log(this.runData.picture_class, '4');
          console.log(JSON.stringify(this.runData), 'runData赋值成功');
          // this.imgsrc = require("@/assets/pictures/" + "bohai" + this.value1 + this.value2 + ".png");
          console.log("完成前端读图");
          const { data: res } = await getPicture(this.runData);
          if (res.code !== 200) return this.$message.error(res.message);
          console.log(res.pictureName);
          //用后端返回的图片名字读图
          this.imgsrc=require("@/assets/pictures/" +res.pictureName);
          // console.log（）需要调用函数才不会返回undefined
          // axios.post("http://localhost:9003/getPicture",this.runData).then(
          //   res => {
          //     console.error();//没有问题，只是console.log出问题
          //     console.log(res.code);
          //     console.log("已经拿到后端的数据");
          //   });
        }
         }
      }
</script>

<style scoped lang="scss">
  .avatar{
     margin-top: 80px;
    margin-left: 550px;
  }
  .block{
    .el-input{
      position: absolute;
      left: 70px;
      top: 50px;
      height: 20px;//解决日期icon的位置
      width: 230px;
    }
    .el-select{
      position: absolute;
      left: 70px;
      top: 110px;
    }
    .el-button{
      position: absolute;
      left: 70px;
      top: 170px;
    }
    .el-image{
      position: absolute;
      left: 500px;
      top: 430px;
    }
    img {
      position: absolute;
      height: 50%;
      width: 60%;
      top: 200px;
      left: 440px;
    }
  }
  .block1{
    .el-pagination{
      position: absolute;
      left: 50px;
      bottom:50px;

    }
  }



  .el-container{
    margin: 0;
    padding: 0;
    /*font-family: "montserrat";*/
    background-image: -moz-linear-gradient(125deg,#2c3e50,#27ae60,#2980b9, #e71a4f);
    background-size: 400%;
    position: absolute;
    height: 100%;
    width: 100%;
    animation:bganimation 15s infinite;
  }
  .el-header {
    /*background-color: #4dd1bb;*/
    /*color: #333;*/
    margin-top: 20px;
    line-height: 60px;

  }



  /*.el-aside {*/
  /*  color: #333;*/
  /*}*/
  /*.el-main{*/
  /*  color: crimson;*/
  /*}*/

</style>
