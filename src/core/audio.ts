export const playTimerEndSound = (): void => {
  const audio = document.getElementById('timer-audio') as HTMLAudioElement;
  
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.warn('⚠️ Impossible de jouer le son:', error);
    });
  } else {
    // Fallback: notification navigateur
    showTimerEndNotification();
  }
};

const showTimerEndNotification = (): void => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('🍽️ Cooking App', {
      body: 'Temps écoulé ! Étape suivante...',
      icon: '/icon-192x192.png'
    });
  } else {
    // Feedback visuel simple
    document.body.style.backgroundColor = '#D4AF37';
    setTimeout(() => {
      document.body.style.backgroundColor = '';
    }, 300);
  }
};

export const requestNotificationPermission = (): void => {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}; 