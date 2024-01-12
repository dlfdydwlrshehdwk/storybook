export default function List ({props}) {

  return (
    <ul>
      {
        data ?
        data.map((x,i)=>{
          return <li key={i}>{x}</li>
        })
        : <li>데이터가 없습니다.</li> 
        
      }
    </ul>
  );
}