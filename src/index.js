import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='palygame' emoji='💻' color='orange' />
      <Skill skill='photograph' emoji='📸' color='skyblue' />
      <Skill skill='python' emoji='👍' color='yellow' />
      <Skill skill='javascript' emoji='👊⛴' color='lime' /> 
    </div>
  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro(){
  return(
    <div>
      <h1>นางสาวยุพารัตน์ สีมาคำ</h1>
      <p>
        เป็นนักศึกษาตามหาอนาคต ตามหารักเเท้เป็นคนชิลๆ ไม่เรื่องมากเป็นคนตามใจ
      </p>
    </div>
  );
}

function Avatar(){
  return <img className='avatar' src='aoy.jpg' alt="My Avatar" ></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);