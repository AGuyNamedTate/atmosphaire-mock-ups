import React from 'react';
import json from './Resources/JSON/TeamBios.json';
import {Row} from 'react-bootstrap';
import banner from './Resources/Images/teambanner.jpg';

function Bio({data}){
    return (
        <div className={data.name}>
            <div className="card mb-3">
              <h3 className="card-header" style={{textAlign: data.key % 2 ===0 ? 'left' : 'right'}}>{data.name}</h3>
              <div className="card-body">
                  <h5 className="card-title" style={{textAlign: data.key % 2 ===0 ? 'left' : 'right'}}>{data.title}</h5>
                  {data.subtitle !== "" ? <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: data.key % 2 ===0 ? 'left' : 'right'}}>{data.subtitle}</h6> : null}              </div>
              {data.key % 2 === 0 ?
               (<Row style={{maxWidth:"100%"}}>
                <img src={data.src} alt={data.name} style={{width:"40rem",}} />
                <div className="card-body" style={{width:"55rem", textAlign:"left", fontSize: "22px"}}>
                    <p className="card-text bio">{data.bio}</p>
                    <p className="card-text bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga?</p>
                </div>
              </Row>) 
               :
                (<Row style={{maxWidth:"100%"}}>
                  <div className="card-body" style={{width:"55rem", textAlign:"left", fontSize: "22px"}}>
                      <p className="card-text bio">{data.bio}</p>
                      <p className="card-text bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                      quia. Quo neque error repudiandae fuga?</p>
                  </div>
                  <img src={data.src} alt={data.name} style={{width:"40rem", padding:"0"}} />
                </Row>)}
              <ul className="list-group list-group-flush">
                    {data.contacts.map((contact) =><li className="list-group-item contact"><a className="card-link">{contact}</a></li>)}
              </ul>
              <div className="card-footer text-muted">
                  Footer Text
              </div>
            </div>
        </div>
    );
}

function Team(){
    return(
        <div className="Team">
            <div class="jumbotron" style={{backgroundImage:`url(${banner})`, backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
                <h1 class="display-4">Our Team</h1>
                <p class="lead">This is where our banner will go</p>
                <hr class="my-4" />
                <p>This is a seperate section</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#Team" role="button">This is a link</a>
                </p>
            </div>
            {json.map((data)=>{
               return(<Bio key={data.key.toString()} data={data} />);
            })}
        </div>
    );
}
export default Team;