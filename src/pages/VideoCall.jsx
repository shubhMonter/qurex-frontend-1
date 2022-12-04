import React from 'react'
import { VideoRoom } from '../components/VideoRoom'
import { Route, useSearchParams } from 'react-router-dom'

export default function VideoCall() {
	// get unique room id
	let [searchParams, setSearchParams] = useSearchParams()
	
  return (
		<div>
			<VideoRoom roomid={searchParams.get('room_id')} userID={searchParams.get('user_id')} />
		</div>
	)
}
