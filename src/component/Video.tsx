import React from 'react';

export interface VideoProps {
    src: string;
} 

export class Video extends React.Component<VideoProps, any> {
    public constructor(props: any){
        super(props);
    }
    public render () {
        return (<div>
            <video className='videoTile'
              controls 
              autoPlay
              src={this.props.src} id = 'video-id'/>
          </div>);
    }
}