import React from "react";

import {Count} from "./Count.jsx";

const Home = (props) => {
	return (

<div className="d-flex justify-content-center">

<Count countValue={<i className="fa-solid fa-clock"></i>} />
<Count countValue={Math.floor(props.counter / 100000) % 10} />
<Count countValue={Math.floor(props.counter / 10000) % 10} />
<Count countValue={Math.floor(props.counter / 1000) % 10} />
<Count countValue={Math.floor(props.counter / 100) % 10} />
<Count countValue={Math.floor(props.counter / 10) % 10} />
<Count countValue={props.counter % 10} />
</div>

);
};


export default Home;