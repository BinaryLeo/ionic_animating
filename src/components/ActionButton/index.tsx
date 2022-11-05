import { CreateAnimation, IonButton, IonIcon } from "@ionic/react";
import React from "react";
import { pulseKeyFrames } from "../../constants";
import "./style.css";

interface ContainerProps {
  startAnimateButton: boolean;
  stopAnimateButton: boolean;
  matchAnimationRef:any;
  handleButtonRef:()=>void;
  iconName:string;
  className: "unmatch"|"match";
}
export const ActionButtons: React.FC<ContainerProps> = (props) => {
 
  return (
    <div className="action-buttons">
      <CreateAnimation
        ref={props.matchAnimationRef}
        duration={1000}
        iterations={1}
        keyframes={pulseKeyFrames}
        play={props.startAnimateButton}
        stop={props.stopAnimateButton}
      >
        <IonButton
          onClick={props.handleButtonRef}
          className={props.className}
          fill="solid"
        >
          <IonIcon icon={props.iconName}></IonIcon>
        </IonButton>
      </CreateAnimation>

     
    </div>
  );
};
