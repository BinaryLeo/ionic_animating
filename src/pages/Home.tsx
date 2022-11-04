import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { ActionButtons } from "../components/ActionButton"; //* Pulse effect buttons
import { ProfileCard } from "../components/ProfileCard"; //* Swipe cards
import {profiles} from "../constants" //* Data provider
import "./Home.css";

export const Home: React.FC = () => {
  const [animateUnmatchButton, setAnimateUnmatchButton] = useState(true);
  const [animateMatchButton, setAnimateMatchButton] = useState(true);
  
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
        <ActionButtons
          {...{
            animateMatchButton,
            animateUnmatchButton,
          }}
        />
      </IonContent>
    </IonPage>
  );
};
