import {
  CreateAnimation,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef, useState } from "react";
import { ActionButtons } from "../components/ActionButton"; //* Pulse effect buttons
import { ProfileCard } from "../components/ProfileCard"; //* Swipe cards
import { profiles } from "../constants"; //* Data provider
import "./Home.css";

import { closeOutline, refresh } from "ionicons/icons";
export const Home: React.FC = () => {
  const [animateUnmatchButton, setAnimateUnmatchButton] = useState(true);
  const [animateMatchButton, setAnimateMatchButton] = useState(true);
  const unmatchAnimationRef = useRef<CreateAnimation>(null);
  const matchAnimationRef = useRef<CreateAnimation>(null);

  const playUnmatchButtonAnimation = () =>
    unmatchAnimationRef.current !== null &&
    unmatchAnimationRef.current.animation.play();

  const playMatchButtonAnimation = () =>
    matchAnimationRef.current !== null &&
    matchAnimationRef.current.animation.play();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Animations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="stack-container-card">
          {profiles.map((profile) => (
            <ProfileCard {...profile} key={profile.id} />
          ))}
        </div>
        <div className="action-buttons-container">
          <ActionButtons
            iconName={closeOutline}
            startAnimateButton={animateMatchButton}
            stopAnimateButton={!animateMatchButton}
            matchAnimationRef={matchAnimationRef}
            handleButtonRef={playMatchButtonAnimation}
            className="match"
          />
          <ActionButtons
            iconName={refresh}
            startAnimateButton={animateUnmatchButton}
            stopAnimateButton={!animateUnmatchButton}
            matchAnimationRef={unmatchAnimationRef}
            handleButtonRef={playUnmatchButtonAnimation}
            className="unmatch"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};
