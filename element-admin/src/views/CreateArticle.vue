<template>
    <div>
        <el-form @submit.native.prevent="saveArticle" ref="form" :model="form" label-width="80px">
            <el-form-item label="文章标题">
                <el-input v-model="article.title"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <el-input type="textarea" v-model="article.body"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>

        <el-calendar v-model="date">
        </el-calendar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                article: {

                },
                date: new Date()
            }
        },
        methods: {
            saveArticle() {
                this.$myAxios.post('article', this.article).then(res => {
                    this.$message({
                        message: '恭喜你，这是一条成功消息',
                        type: 'success'
                    });
                    console.log(res)
                    this.$router.push('/posts/index')
                }).catch(error => {
                    console.log(error)
                    this.$message({
                        message: '警告哦，这是一条警告消息',
                        type: 'warning'
                    });
                    this.$router.push('/posts/index')
                })
                console.log(this.article);
            }
        }
    }
</script>