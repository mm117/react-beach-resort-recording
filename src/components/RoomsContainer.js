import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../context';

function RoomsContainer({context}) {
    const {loading,sortedRooms,rooms} = context;
    return (
      <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
      </>
    );


}

export default withRoomConsumer(RoomsContainer);












// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import {RoomConsumer} from '../context';

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) =>{
//                    const {loading,sortedRooms,rooms} = value;
//                     return (
//                         <div>
//                         Hello From Room Container 
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                      </div>
//                     )
//                 }
//             }
//          </RoomConsumer>
       
//     )
// }
