import Axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return Axios.get("http://localhost:8080/homepage")
    }

    executeHelloWorldPathVariableService(name) {
        return Axios.get(`http://localhost:8080/helloworld/name/${name}`)
    }

}

export default new HelloWorldService()