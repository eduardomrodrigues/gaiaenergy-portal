
import React from 'react';


class HelloVisitor extends React.Component{


    constructor(props){
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo){

    }

    render(){
        
        if(this.state.hasError){
            return 'ERROR';
        }
        
        return <h2 className="sub-titulo-padrao grid12">Welcome to the 
                    <span id="fitme-word">Fitme</span>
                    program! <br /> 
                    Tell me your history
                </h2>;
        
    }

}

module.exports = HelloVisitor;