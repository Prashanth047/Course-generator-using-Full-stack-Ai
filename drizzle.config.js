/** @type{import ("drizzle-kit").Config} */
export default{
    schema:"./configs/schema.jsx",
    dialect:'postgresql',
    dbCredentials:{
        url:"postgresql://ai-course-generator_owner:HfXO1P8RcyKJ@ep-holy-union-a5at8o5m.us-east-2.aws.neon.tech/ai-course-generator?sslmode=require"
    }
}