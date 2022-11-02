import { CreateAnimation, IonButton, IonIcon } from "@ionic/react";
import { closeOutline, heart } from "ionicons/icons";
import React, { useRef } from "react";
import { pulseKeyFrames } from "../../constants";
import "./style.css";
interface ContainerProps {
  animateUnmatchButton: boolean;
  animateMatchButton: boolean;
}
export const ActionButtons: React.FC<ContainerProps> = (props) => {
  const unmatchAnimationRef = useRef<CreateAnimation>(null);
  const matchAnimationRef = useRef<CreateAnimation>(null);

  const playUnmatchButtonAnimation = () => {
    if (unmatchAnimationRef.current !== null) {
      unmatchAnimationRef.current.animation.play();
    }
  };
  const playMatchButtonAnimation = () => {
    if (matchAnimationRef.current !== null) {
      matchAnimationRef.current.animation.play();
    }
  };
  return (
    <div className="action-buttons-container">
      <CreateAnimation
        ref={unmatchAnimationRef}
        duration={1000}
        iterations={1}
        keyframes={pulseKeyFrames}
        play={props.animateUnmatchButton}
        stop={!props.animateUnmatchButton}
      >
        <IonButton
          onClick={playUnmatchButtonAnimation}
          className="unmatch"
          fill="solid"
        >
          <IonIcon icon={closeOutline}></IonIcon>
        </IonButton>
      </CreateAnimation>

      <CreateAnimation
        ref={matchAnimationRef}
        duration={1000}
        iterations={1}
        keyframes={pulseKeyFrames}
        play={props.animateMatchButton}
        stop={!props.animateMatchButton}
      >
        <IonButton
          onClick={playMatchButtonAnimation}
          className="match"
          fill="solid"
        >
          <IonIcon icon={heart}></IonIcon>
        </IonButton>
      </CreateAnimation>
    </div>
  );
};
