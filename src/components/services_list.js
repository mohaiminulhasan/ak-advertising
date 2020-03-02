import React from 'react';

class ServicesList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.data.map(service => 
                    <>
                        <li key={service.id}>{service.name}</li>
                        {/* Base Case */}
                        {service.data.length > 0 && 
                        <ServicesList data={service.data}/>}
                    </>
                )}
            </ul>
        )
    }
}

export default ServicesList;