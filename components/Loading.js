import { Oval } from  'react-loader-spinner'

function Loading() {
  return (
    <center style={{ display: "grid" , placeItems: "center" , height: "100vh" }}>
        <div>
            <img style={{marginBottom: 10}} height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="" />
            <Oval
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
       
       
        </div>

      
    </center>
  );
}

export default Loading;
