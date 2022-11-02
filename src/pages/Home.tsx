import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ActionButtons } from "../components/ActionButton";
import { ProfileCard } from "../components/ProfileCard";
import "./Home.css";

export const Home: React.FC = () => {
  const profileEvents = {
    onMatch: () => {},
    onUnmatch: () => {},
    onReset: () => {},
  };
  const profiles = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "John",
      bio: "loves cuddles and belly rubs",
      ...profileEvents,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1592769606534-fe78d27bf450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Charlie",
      bio: "How you doing",
      ...profileEvents,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1627366247844-b4b5df8854d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Shane",
      bio: "Stealing hearts since 2022",
      ...profileEvents,
    },
  ];
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
            animateMatchButton: false,
            animateUnmatchButton: true,
          }}
        />
      </IonContent>
    </IonPage>
  );
};
