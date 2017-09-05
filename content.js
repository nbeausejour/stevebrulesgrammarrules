var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/(Daniel)/gi, 'Drangle');
            var replacedText = text.replace(/(Bingo)/gi, 'Bringo');
            var replacedText = text.replace(/(Sushi)/gi, 'Shushi');
            var replacedText = text.replace(/(Skateboard)/gi, 'Skrateboard');
            var replacedText = text.replace(/(Airplane)/gi, 'Jumbo Jret');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
                   
            }
        }
    }
}
