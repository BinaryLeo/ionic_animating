import { createAnimation, IonButton, IonIcon } from "@ionic/react";
import { closeOutline, heart } from "ionicons/icons";
import React, { useRef } from "react";
import { pulseKeyFrames } from "../../constants";
import "./style.css";
export const ActionButtons: React.FC = () => {
  
  const unmatchButtonRef = useRef<HTMLDivElement>(null);
  const matchButtonRef = useRef<HTMLDivElement>(null);

  const playUnmatchButtonAnimation = () => {
    if (unmatchButtonRef.current != null) {
      const animation = createAnimation()
        .addElement(unmatchButtonRef.current)
        .duration(1000)
        .keyframes(pulseKeyFrames);
      animation.play();
    }
  };
  const playmatchButtonAnimation = () => {
    if (matchButtonRef.current != null) {
      const animation = createAnimation()
        .addElement(matchButtonRef.current)
        .duration(1000)
        .keyframes(pulseKeyFrames);
      animation.play();
    }
  };
  return (
    <div className="action-buttons-container">
      <div ref={unmatchButtonRef}>
        <IonButton
          onClick={playUnmatchButtonAnimation}
          className="unmatch"
          fill="solid"
        >
          <IonIcon icon={closeOutline}></IonIcon>
        </IonButton>
      </div>
      <div ref={matchButtonRef}>
        <IonButton
          onClick={playmatchButtonAnimation}
          className="match"
          fill="solid"
        >
          <IonIcon icon={heart}></IonIcon>
        </IonButton>
      </div>
    </div>
  );
};
