import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	showOptions: false, 
        	options:this.props.data,
        	word: ""
        }
    }
    _handleKeyPress(e){
    	if(e.keyPress === 13){
    		this.setState({showOptions: false})
    		return this.props.onEnterPress(e.target.value)
    	} 
    }
    _change(word){
    	this.props.onChange(word)
    }
    _input(e){

    }
    render() {
    	const options = this.state.options.map((o,idx) => <option key={idx} value={o}/>)
        return(
        	<div>
        		<input 
        		   name="searchbar" aria-labelledBy={this.props["aria-labelledBy"]} 
                   id="searchbar" role="search"
        		   placeholder="type to search" 
        		   list="searchs" style={this.props.style}
        		   onChange={ e =>	this._change.call(this, e.target.value)}
        		   onKeyPress={this._handleKeyPress.bind(this)}
        		   />
        		 <datalist 
        		 onInput={this._input.bind(this)}
        		 id="searchs">
        			 {options}
        		 </datalist>
        	</div>
        )
    }
}


export default SearchBar;
