import React,{useState} from "react";

const App = () => {
let time = new Date().toLocaleTimeString();

const [ctime, setCtime] = useState(time);

const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
};

setInterval(UpdateTime,1000);
return(
<>
{ctime}
</>
);
};
export default App;
