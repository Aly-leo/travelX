# Réponses — TP 3 TravelX

## Exercice 2 — pourquoi un `useEffect` dans `useSalutation` ?

Le `useEffect` est nécessaire car la salutation dépend du temps : il faut démarrer une minuterie (`setInterval`) à l'affichage du composant et l'arrêter (`clearInterval`) à son démontage, et la valeur change sans qu'aucune action de l'utilisateur ne déclenche de rendu.
À l'inverse, la liste filtrée de `useDeparts` n'en utilise pas : c'est une valeur dérivée des états (recherche, filtre), donc la calculer directement à chaque rendu (`useMemo`) évite un rendu supplémentaire et un état dupliqué qui pourrait se désynchroniser.
