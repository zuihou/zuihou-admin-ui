<template>
  <el-dialog :close-on-click-modal="false" :close-on-press-escape="false" :title="title" :visible.sync="isVisible" :width="width" top="50px">
    <el-form ref="form" :model="datasourceConfig" :rules="rules" label-position="right" label-width="130px">
      <el-form-item :label="$t('table.datasourceConfig.name')" prop="name">
        <el-input v-model="datasourceConfig.name" placeholder="名称" />
      </el-form-item>
      <el-form-item :label="$t('table.datasourceConfig.username')" placeholder="名称" prop="username">
        <el-input v-model="datasourceConfig.username" />
      </el-form-item>
      <el-form-item :label="$t('table.datasourceConfig.password')" prop="password">
        <el-input v-model="datasourceConfig.password" />
      </el-form-item>
      <el-form-item :label="$t('table.datasourceConfig.url')" prop="expirationTime">
        <el-input v-model="datasourceConfig.url" />
      </el-form-item>
      <el-form-item :label="$t('table.datasourceConfig.driverClassName')" prop="expirationTime">
        <el-input v-model="datasourceConfig.driverClassName" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button plain type="warning" @click="isVisible = false">{{ $t('common.cancel') }}</el-button>
      <el-button plain type="primary" @click="submitForm">{{ $t('common.confirm') }}</el-button>
    </div>
  </el-dialog>
</template>
<script>
import datasourceConfigApi from '@/api/DatasourceConfig.js'

export default {
  name: 'DatasourceConfigEdit',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      type: 'add',
      datasourceConfig: this.initDatasourceConfig(),
      screenWidth: 0,
      width: this.initWidth(),
      roles: [],
      rules: {
        code: [
          { required: true, message: this.$t('rules.require'), trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    isVisible: {
      get () {
        return this.dialogVisible
      },
      set () {
        this.close()
        this.reset()
      }
    }
  },
  mounted () {
    window.onresize = () => {
      return (() => {
        this.width = this.initWidth()
      })()
    }
  },
  methods: {
    initDatasourceConfig () {
      return {
        id: '',
        username: '',
        name: '',
        password: '',
        driverClassName: '',
        url: ''
      }
    },
    initWidth () {
      this.screenWidth = document.body.clientWidth
      if (this.screenWidth < 991) {
        return '90%'
      } else if (this.screenWidth < 1400) {
        return '45%'
      } else {
        return '800px'
      }
    },
    setDatasourceConfig (val) {
      this.datasourceConfig = { ...val }
      if (this.type === 'copy') {
        this.datasourceConfig.id = null
      }
    },
    close () {
      this.$emit('close')
    },
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.type === 'edit') {
            this.update()
          } else {
            this.save()
          }
        } else {
          return false
        }
      })
    },
    save () {
      datasourceConfigApi.save(this.datasourceConfig)
        .then((response) => {
          const res = response.data
          if (res.isSuccess) {
            this.isVisible = false
            this.$message({
              message: this.$t('tips.createSuccess'),
              type: 'success'
            })
            this.$emit('success')
          }
        }).finally(() => {
          return true
        })
    },
    update () {
      datasourceConfigApi.update(this.datasourceConfig)
        .then((response) => {
          const res = response.data
          if (res.isSuccess) {
            this.isVisible = false
            this.$message({
              message: this.$t('tips.updateSuccess'),
              type: 'success'
            })
            this.$emit('success')
          }
        }).finally(() => {
          return true
        })
    },
    reset () {
      // 先清除校验，再清除表单，不然有奇怪的bug
      this.$refs.form.clearValidate()
      this.$refs.form.resetFields()
      this.datasourceConfig = this.initDatasourceConfig()
    }
  }
}
</script>
<style lang="scss" >

</style>
