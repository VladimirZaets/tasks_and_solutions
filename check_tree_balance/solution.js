var binaryTree_notBalanced = {
		left: {
			left: {
				left: {},
				right: {}
			},
			right: {
				left: {},
				right: {}
			}
		},
		right:{
			left: {
				left: {},
				right: {}
			}	
		}
	},	
	binaryTree_balanced = {
		left: {
			left: {
				left: {},
				right: {}
			},
			right: {
				left: {},
				right: {}
			}
		},
		right:{
			left: {
				left: {},
				right: {}
			},
			right: {
				left: {},
				right: {}
			}	
		}
	};


function maxDepth(root) {
	if (!root) {
		return 0;
	}

	return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
}
function minDepth(root) {
	if (!root) {
		return 0;
	}

	return 1 + Math.min(minDepth(root.left),minDepth(root.right));
}

function isBalanced (root) {
	return (maxDepth(root) - minDepth(root) <= 1);
}

console.log(isBalanced(binaryTree_notBalanced));
console.log(isBalanced(binaryTree_balanced));
