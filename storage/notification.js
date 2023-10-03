import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const SIZE = 10;
const COLOR = '#FFFFFF';

export const newNotification = [
    {
        id: 1,
        type: 'note',
        image_uri: require('../assets/person-1.jpg'),
        noteColor: '#39CA5B',
        noteIcon: <Ionicons name="chatbubble-ellipses" size={SIZE} color={COLOR} />,
        message: "Landon Bloom and Emilia Harcourt also commented on Anna Delvey's post",
        time: 'about an hour ago',
        isOnline: true
    },
    {
        id: 2,
        type: 'note',
        image_uri: require('../assets/person-2.jpg'),
        noteColor: '#1877F2',
        noteIcon: <Ionicons name="image" size={SIZE} color={COLOR} />,
        message: "Jim Hopper, Robin Buckley and Rachel Podrez love your story",
        time: '6 hour ago',
        isOnline: true
    },
];


export const earlierNotification = [
    {
        id: 1,
        type: 'note',
        image_uri: require('../assets/person-6.jpg'),
        noteColor: '#F31954',
        noteIcon: <FontAwesome name="youtube-play" size={SIZE} color={COLOR} />,
        message: "Robin Buckley shred a reel: Design Faster With The Best Figma AI Plugins 😍⚡",
        time: 'a day ago',
        isOnline: true
    },
    {
        id: 2,
        type: 'friend_request',
        image_uri: require('../assets/person-5.jpg'),
        noteColor: '#1877F2',
        noteIcon: <Ionicons name="ios-person" size={SIZE} color={COLOR} />,
        message: "Rachel Podrez sent you a friend requests",
        isOnline: true
    },
    {
        id: 3,
        image_uri: require('../assets/person-4.jpg'),
        noteColor: '#39CA5B',
        noteIcon: <Ionicons name="chatbubble-ellipses" size={SIZE} color={COLOR} />,
        message: "Millie Brown commented in a post that you’re taged in “Seriously?🤣”",
        time: '4 days ago',
        isOnline: false
    },
    {
        id: 4,
        image_uri: require('../assets/person-3.jpg'),
        noteColor: '#FFDE34',
        noteIcon: <AntDesign name="heart" size={SIZE} color={COLOR} />,
        message: 'Anna Mary and Will Byers reacted to your comment “ Great Work 👏🏼”',
        time: '6 days ago',
        isOnline: true
    },
    {
        id: 5,
        image_uri: require('../assets/person-2.jpg'),
        noteColor: '#1877F2',
        noteIcon: <AntDesign name="like1" size={SIZE} color={COLOR} />,
        message: 'Erica Sinclair and Will Byers liked your comment “Thank you 😊❤️”',
        time: '7 days ago',
        isOnline: false
    },
]