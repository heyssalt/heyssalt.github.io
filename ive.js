// 단어 목록
const words = ["술", "조촐", "야벙"];

// 텍스트 노드를 변경하는 함수
function addEmojiToTextNode(node) {
    let text = node.nodeValue;
    words.forEach(word => {
        const regex = new RegExp(`(${word})`, 'g');
        text = text.replace(regex, '🚹$1');
    });
    node.nodeValue = text;
}

// 텍스트 노드를 순회하며 변경
function traverseNodes(node) {
    if (node.nodeType === 3) {
        addEmojiToTextNode(node);
    } else {
        node.childNodes.forEach(child => traverseNodes(child));
    }
}

// body의 모든 노드를 순회
traverseNodes(document.body);
