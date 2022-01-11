
import axios from "axios";
const axiosClient = axios.create({
    baseURL:"http:localhost:3000"
})
export default {
    addProject(id ,Name, skills,information, averageOfprice){
        return axiosClient.post("/postProject" ,id, Name, skills,information, averageOfprice );
    }
}