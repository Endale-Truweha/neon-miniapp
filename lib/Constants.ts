export const Backend_URL = "https://melamela.yonas.pro.et";

export const emojiSet = [
    // Smileys & Emotion
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
    '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥳', '🤩', '🥸', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔',
    '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🥴', '😵', '🤯', '🤠', '😎', '🤓', '🥺', '😫', '😤', '😠', '😡',
    '😭', '😓', '😩', '😢', '🤧', '🥺', '😟', '😦', '😧', '😨', '😩', '😠', '😡', '🤬', '😷', '🤒', '🤕', '🤢', '🤮',

    // People & Body
    '👶', '👦', '👧', '👨', '👩', '🧑', '👱‍♂️', '👱‍♀️', '🧓', '👴', '👵', '👨‍⚕️', '👩‍⚕️', '👨‍🎓', '👩‍🎓', '👨‍⚖️', '👩‍⚖️',
    '👮‍♂️', '👮‍♀️', '👷‍♂️', '👷‍♀️', '💂‍♂️', '💂‍♀️', '🕵️‍♂️', '🕵️‍♀️', '👨‍🚒', '👩‍🚒', '👨‍✈️', '👩‍✈️', '👨‍🚀', '👩‍🚀',
    '👨‍🔧', '👩‍🔧', '👨‍💻', '👩‍💻', '👨‍🎤', '👩‍🎤', '👨‍🏫', '👩‍🏫', '👨‍🍳', '👩‍🍳', '🧑‍🍳', '👨‍🌾', '👩‍🌾',

    // Animals & Nature
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐣',
    '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦠', '🐢', '🐍', '🦕', '🦖',
    '🦎', '🐙', '🦑', '🦞', '🦀', '🐠', '🐟', '🐡', '🐬', '🦭', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🐘', '🦏', '🦛', '🦧',
    '🦓', '🦍', '🐫', '🦘', '🦒', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐', '🦙', '🦝', '🦢', '🦜', '🦩', '🦚', '🐓', '🐣',
    '🌸', '🌼', '🌻', '🌹', '🌷', '🌱', '🌲', '🌳', '🌵', '🌾', '🍀', '🍁', '🍂', '🍃', '🌿', '🍄', '🌰', '🌍', '🌎', '🌏',

    // Food & Drink
    '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥭', '🍅', '🍆', '🥑', '🥦', '🥒', '🌽',
    '🌶', '🥕', '🍄', '🥔', '🍞', '🥐', '🥖', '🥨', '🥞', '🧇', '🥯', '🥓', '🥩', '🍗', '🍖', '🍤', '🍣', '🍱', '🍛', '🍜',
    '🍝', '🍲', '🍿', '🥡', '🍦', '🍩', '🍪', '🍰', '🎂', '🍮', '🍫', '🍬', '🍭', '🍯', '🍼', '☕', '🍵', '🍻', '🥂',

    // Travel & Places
    '🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚚', '🚛', '🚜', '🛵', '🏍', '🚲', '🛴', '🚨', '🚔', '🚍', '🚠',
    '🚡', '🚃', '🚋', '🚝', '🚄', '🚅', '🚈', '🚂', '✈️', '🛫', '🛬', '🚁', '🛸', '⛵', '🚤', '🛥', '🛳', '🛶', '🚢', '🗽',
    '🗿', '🗼', '🗻', '⛲', '🎡', '🎢', '🎠', '⛺', '🏞', '🌄', '🌅', '🏖', '🏝', '🏜', '🏰', '🏯', '🏟', '🕍', '⛩',

    // Activities & Sports
    '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎳', '⛳', '🏒', '🏓', '🏸', '🥅', '🎱', '🎯', '🎣', '🤿', '🛹', '🏋️‍♂️', '🏋️‍♀️',
    '🤸‍♂️', '🤸‍♀️', '⛹️‍♂️', '⛹️‍♀️', '🤾‍♂️', '🤾‍♀️', '🏌️‍♂️', '🏌️‍♀️', '🏄‍♂️', '🏄‍♀️', '🏊‍♂️', '🏊‍♀️', '🤽‍♂️', '🤽‍♀️',
    '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️', '🤹‍♂️', '🤹‍♀️', '🧘‍♂️', '🧘‍♀️', '🎿', '🛷', '⛷', '🏂', '🥌', '🎽', '🏅', '🥇', '🥈', '🥉',

    // Objects & Symbols
    '⌚', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '💽', '💾', '💿', '📀', '📷', '📹', '🎥', '📞', '☎️', '📟', '📠',
    '📺', '📻', '🎙', '🎚', '🎛', '⏰', '⏱', '⏲', '🕰', '🧭', '💡', '🔦', '🏮', '📓', '📔', '📒', '📚', '📖', '🔒', '🔑',
    '🗝', '🔏', '🔮', '🧿', '💈', '⚗️', '🔬', '🔭', '📡', '🕹', '🎮', '🧩', '🧸', '🎭', '🎨', '🖌', '🖍', '🖊',

    // Random Emojis to reach 1000
    '🤖', '🎃', '🧙‍♀️', '🦸‍♂️', '🦸‍♀️', '🧚‍♂️', '🧚‍♀️', '👻', '👽', '💀', '🤡', '🧙‍♂️', '🧟‍♂️', '🧟‍♀️', '🤖',
    '👾', '🎄', '🎆', '🎇', '🎈', '🪄', '🧞‍♂️', '🧞‍♀️', '🎉', '🎊', '✨', '🌟', '💫', '🌈', '☀️', '🌤', '⛅', '🌥',
    '🌦', '☔', '🌧', '🌨', '❄️', '☃️', '🌬', '🌪', '🌀', '🌈', '🔥', '💧', '🌊', '🍂', '🌪', '🌋', '🧊', '💨',
    '🌌', '🌠', '🎇', '⭐', '☄️', '🔮', '🧿', '⚡', '🌈', '🕊', '🎶', '🎵', '🎤', '🎧', '🎼', '🎹', '🥁', '🎻', '🎺',
    '🎷', '🪕', '📯', '📢', '📣', '🔔', '🎊', '🎉', '🎈', '🎏', '🎌', '🏮', '📅', '📆', '📇', '🗓', '📇', '✉️', '📬', '📭',
    '📦', '📤', '📥', '📦', '📈', '📉', '📊', '📋', '📖', '📗', '📘', '📙', '📕', '📚', '📓', '📒', '📔', '📕', '📑', '🔖',
    '🏷', '🏷️', '📌', '📍', '✂️', '🔗', '📎', '🖇', '📏', '📐', '🖌', '🖍', '✏️', '🖊', '🖊️', '💻', '⌨️', '🖥', '💾',
    '💽', '💿', '📀', '📱', '📲', '☎️', '📞', '📟', '📠', '📺', '📻', '📡', '📚', '🔒', '🔑', '🔏', '🔮', '🧿', '🔬',
    '🔭', '⚗️', '🧪', '🧬', '🔋', '💡', '🕯', '🪔', '💡', '🕳', '🔍', '🔎', '🗑', '🚮', '🚰', '🗑', '🚮', '♻️', '🔄',
    '⚠️', '🚸', '♿', '🔞', '🔑', '🪙', '🪙', '🗡', '⚔️', '🪚', '🔧', '🔩', '🔨', '🪓', '🧰', '🧲', '🔮', '⚙️', '🔭', '🔬'
];



  