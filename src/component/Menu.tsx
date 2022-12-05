import React from 'react';

export interface MenuProps {
    chooseVideo: (text: VideoType) => void
} 

export enum VideoType {
    deer,snail,cat,spider
  }

export class Menu extends React.Component<MenuProps,any> {

    public constructor(props: any){
        super(props);
        console.log(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick(e: any) {
        var text = e.target.value;
        console.log(text);
        this.props.chooseVideo(text as VideoType);
    }
    public render() {
        return (<form onClick={this.handleClick}>
            <input type="radio" name="src" value={VideoType.deer}/> Deer
            <input type="radio" name="src" value={VideoType.snail} /> Snail
            <input type="radio" name="src" value={VideoType.cat} /> Cat
            <input type="radio" name="src" value={VideoType.spider} /> Spider
          </form>);
    }
}