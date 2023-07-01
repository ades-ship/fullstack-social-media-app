import Express  from "express";
const app=Express();
import useRoutes from "./routes/users.js"
app.use("/api/users",useRoutes)

app.listen(8800,()=>{
    console.log("api working");
})