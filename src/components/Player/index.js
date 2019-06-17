import React from "react";
import Slider from "rc-slider";

import {
  Container,
  Current,
  Progress,
  Controls,
  Time,
  ProgressSlider,
  Volume
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://www.music-bazaar.com/album-images/vol1/74/74070/570528-big/Times-Like-These-CD2-cover.jpg"
        alt="Cover"
      />
      <div>
        <span>Times like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play" />
        </button>
        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>1:36</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ border: 0 }}
            value={25}
          />
        </ProgressSlider>
        <span>5:25</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        value={50}
      />
    </Volume>
  </Container>
);

export default Player;
