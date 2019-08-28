import React, {Component} from 'react'
import '../Content.css'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            from: '',
            job: '',
            employer: '',
            movie1: '',
            movie2: '',
            movie3: ''
        }
    }

    render() {
        let userArray = this.props.data

        for (let i = 0; i < userArray.length; i++) {
            this.setState({
                name: userArray[i].name.first
                // from: ,
                // job:,
                // employer:,
                // movie1:,
                // movie2:,
                // movie3:
            })
        }

        // let mapped = userArray.map((el, i) => {
        //     for (i; i < userArray.length; i++) {
        //         let mapped
        //     }
        // })
        
        // let name = userArray[0].name.first

        // console.log(userArray)

        return (
            <div className="content">
                <div className="number">
                <h1 className="count">1/25</h1>
                </div>
                <h1 className='name'>{this.state.name}</h1>
                <div className="user-info">
                    <p className='from'>{this.state.from}</p>
                    <p className='job'>{this.state.job}</p>
                    <p className='employer'>{this.state.employer}</p>
                </div>
                <div className="movies">

                <h3 className='movie-header'>Favorite Movies:</h3>
                    <p className='movie1'>1. {this.state.movie1}</p>
                    <p className='movie2'>2. {this.state.movie2}</p>
                    <p className='movie3'>3. {this.state.movie3}</p>
                </div>


            </div>
        )
    }
}

export default Content