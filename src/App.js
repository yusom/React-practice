import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode:"create", 
            selected_content_id:2,
            subject:{title: "WEB", sub: "World Wide Web!"},
            welcome:{title: "Welcome", desc: "Hello, React!"},
            contents: [
                {id:1, title: "HTML", desc: "HTML is for information"},
                {id:2, title: "CSS", desc: "Css is for design"},
                {id:3, title: "JavaScript", desc: "JavaScript is for interactive"}
            ]
        }
    }
    render() { 
        var _title, _desc, _article = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if(this.state.mode === 'read'){
            var i = 0;
            while(i < this.state.contents.length){
                var data = this.state.contents[i];
                if(data.id === this.state.selected_content_id){
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        }
        return (
            <div className='App'>
                <Subject 
                    title={this.state.subject.title} 
                    sub={this.state.subject.sub}
                    onChangePage={function(){
                        this.setState({mode:"welcome"});
                    }.bind(this)}
                    >
                </Subject>
                <TOC 
                 onChangePage={function(id){
                    this.setState({
                        mode:"read",
                        selected_content_id:Number(id)
                    });
                }.bind(this)}
                data={this.state.contents}
                ></TOC>
                <Control onChangeMode={function(_mode){
                    this.setState({
                        mode:_mode
                    })
                }.bind(this)}></Control>
                <ReadContent title={_title} desc={_desc}></ReadContent>
            </div>
        );
    }
}

export default App;


/*constructor(props){  
    super(props);
  }
render 함수보다 먼저 실행하면서 그 component를 초기화시켜주고 싶은 함수 */


/* React에선 state값이나 props의 값이 바뀌면 해당되는 component의 render함수가 호출된다
 = 화면이 다시 그려진다 */


 /* bind(this) 필수 */