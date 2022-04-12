<template>
    <a-upload
            action="https://v0.api.upyun.com/webimg"
            :before-upload="beforeUpload"
            @change="handleChange"
            :data="newupyunSign"
            multiple="true"
    >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="">123123</i>
        <a-button>
            <upload-outlined></upload-outlined>
            Upload png only
        </a-button>
    </a-upload>
</template>
<script lang="ts">

import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import { message, Upload } from 'ant-design-vue';
import { upyunSignature } from '@/utils/uploadupy';

export default defineComponent({
  components: {
    UploadOutlined
  },
  data(){
    return{
        imageUrl:''
    }
  },
  setup() {
    const newupyunSign = upyunSignature('/formApi/cesant/add/');
    const fileList = ref<UploadProps['fileList']>([
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ]);

    const handleChange = ({ file, fileList }: UploadChangeParam) => {
        console.log(1232312321232123);

        if (file.status !== 'uploading') {
            /*file.name*/
            /*'https://webimg.mp12345.com'+file.response.url*/
            /*多个的话循环数组*/
            console.log(file, fileList);
        }
    };
    const beforeUpload: UploadProps['beforeUpload'] = file => {
        console.log(file);
        console.log(12312331233);
        return file;
      /*上传图片之前*/
     /* const isPNG = file.type === 'image/png';
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;*/
    };
    return {
      fileList,
      handleChange,
      beforeUpload,
      newupyunSign
    };
  },
  methods:{
    handleSuccess (res:any) {
        this.imageUrl = this.imageUrl+res.url
        console.log(this.imageUrl);
    },
    handleFormatError (file:any) {
     message.warning({
         content: 'File format of ' + file.name + ' is incorrect,  please select jpg or png.' })
    },
  }
});
</script>

