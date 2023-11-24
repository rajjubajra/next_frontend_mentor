import {useState, useEffect} from 'react';

const keystyle = "py-2 px-4 m-1 cursor-pointer font-bold flex justify-center item-center rounded-sm  border-b-2 border-slate-400 rounded-md";


const keyArray = [
  '7','8','9','del',
  '4','5','6','+',
  '1','2','3','-',
  '.','0','/','*'
]




function Typepad({keyValue, styleState}) {

/** colour states */
const [bg, setBg] = useState('');
const [equalTo, setEqualTo] = useState('');
const [del, setDel] = useState('');
const [allKey, setAllKey] = useState('')


useEffect(()=> {

  if(styleState === 1){
      setBg('bg-stone-200')
      setEqualTo('bg-orange-300');
      setDel('bg-green-300');
      setAllKey('bg-slate-100');
  }

  if(styleState === 2){
      setBg('bg-blue-900');
      setEqualTo('bg-red-600');
      setDel('bg-cyan-300');
      setAllKey('bg-slate-100');
  }
      
  if(styleState === 3){
      setBg('bg-purple-700 text-yellow-400');
      setEqualTo('bg-green-600');
      setDel('bg-fuchsia-600');
      setAllKey('bg-violet-900');
  }

},[styleState])


  return (
    <div className={`${bg} w-full p-5 grid grid-cols-4 uppercase`}>
    {
      keyArray && keyArray.map(item => {
        return <div  key={item}
                onClick={() => keyValue(item)}
                className={`${keystyle}  ${item === 'del' ? del : allKey }`}>{item}</div>
      })
    }
      <div 
      onClick={() => keyValue('reset')}
      className={`${keystyle} col-span-2 ${del}  shadow-md`}>Reset</div>
      <div 
      onClick={() => keyValue('=')}
      className={`${keystyle} col-span-2 ${equalTo} shadow-md`}>=</div>
    </div>
  )
}

export default Typepad