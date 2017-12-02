import React, { Component } from 'react';

class Region extends Component {

  render() {
    const players = this.props.data;
    return (
      <div className="region">
        <p>{this.props.update}</p>
        <h2>{this.props.title}</h2>
        <table>
          <colgroup>
            <col width="10%" />
            <col width="12%" />
            <col width="20%" />
            <col width="43%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Country</th>
              <th className="align-right" onClick={this.props.sortTeam}>Team</th>
              <th className="align-left">Player Name</th>
              <th className="">Solo MMR</th>
            </tr>
          </thead>
          <tbody>
            {
              players.map((player, key) => {
                const team = player.team;
                const displayTeam = team.length > 1 ? team.substring(0, team.length - 1) : '-----';
                const imgSrc = player.country || '';
                let displayCountry = '-----';

                if(imgSrc.length) {
                  displayCountry = <img src={imgSrc} alt=""/>;
                }
                return (
                  <tr key={key}>
                    <td data-label="Rank">{key + 1}</td>
                    <td data-label="Country">{displayCountry}</td>
                    <td className="align-right" data-label="Team">{displayTeam}</td>
                    <td className="align-left" data-label="Player Name">{player.name}</td>
                    <td data-label="Solo MMR" className="">-----</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Region;