import { Node } from "./Node";


export class TreeNode extends Node{
	/**
	 * makes the node for the binary tree search node. should have left and right children.
	 * @param  {[type]} data [data to be entered.]
	 * @return {[type]}      [description]
	 */
	constructor(data){
		super(data);
		this.leftChild = null;
		this.rightChild = null;
		this.parent = null;
	}
}

export class BST{
	constructor(){
		if (arguments.length > 0){
			throw new Error('no parameters are allowed');
		}
		this.root = null;
		this.size = 0;
	}
	/**
	 * inserts a node in the binary search tree.
	 * @param  {[type]} data [data to be inserted; it will be in the TreeNode Class]
	 * @return {[type]}      [after inserting the node into the BST [short for Binary Search Tree] returns nothing]
	 */
	insert(data){
		if(arguments.length !== 1){
			throw new Error('wrong number of parameters');
		}
		let toBeInserted = new TreeNode(data);
		if(this.root == null){
			this.root = toBeInserted;
		}
		else{
			findPlace(toBeInserted, this.root);
		}
		this.size++;
	}
	remove(value){
		let node = this.traversal(value);
		if(node != null){
			// can be deleted because the value has been found
			this.size--;
			//conditions to use 
			let noChild = (node.leftChild == null && node.rightChild == null);
			let hasLeftChild = (node.leftChild != null && node.rightChild ==null);
			let hasRightChild = (node.leftChild == null && node.rightChild !=null);
			let hasBoth = (node.leftChild != null && node.rightChild !=null)
			//case where it has no chlidren
			if(noChild){
				if(this.root == node){
					//if it's a root and no child just set the root equal to null;
					this.root = null;
				}
				else if(node.parent.leftChild == node){
					//if the node is a leaf of another node, then set the another node's child information
					node.parent.leftChild = null;
				}
				else if(node.parent.rightChild == node){
					//if the node is a leaf of another node, then set the another node's child information
					node.parent.rightChild = null;
				}
			}
			//case where the deletion case has one child
			else if(hasLeftChild || hasRightChild){
				if(hasLeftChild){
					// if it has left child
					if(this.root == node){
						// about to be deleted node is the	root			
						this.root = node.leftChild;
						this.root.parent = null;					
					}
					else if(node.parent.leftChild == node){
						//if the node is a child of another node, then set the another node's child information.
						node.parent.leftChild = node.leftChild;
						node.parent.leftChild.parent = node.parent;
					}
					else if(node.parent.rightChild == node){
						node.parent.rightChild = node.leftChild;
						node.parent.rightChild.parent = node.parent;
					}
				}
				else if(hasRightChild){
					if(node.parent.leftChild == node){
						//if the node is a child of another node, then set the another node's child information correctly.
						node.parent.leftChild = node.rightChild;
						node.parent.leftChild.parent = node.parent;
					}
					else if(node.parent.rightChild == node){
						node.parent.rightChild = node.rightChild;
						node.parent.rightChild.parent = node.parent;
					}
				}	
			}
			else if(hasBoth){
				let resultNode = this.findMinfromRightSub();
				//found the resultNode that's going to replace the selected node.
				if (resultNode.parent != null) {
					//if the resultnode has parent first off make the parent's connection the result node gone.
					if(resultNode.parent.leftChild == resultNode){
						resultNode.parent.leftChild = null;
					}
					else{
						resultNode.parent.rightChild = null;
					}	
				}

				if(this.root == node){
					this.root = resultNode;
				}

				resultNode.rightChild = node.rightChild;
				resultNode.leftChild = node.leftChild;
				resultNode.parent = node.parent;
			}
			else{
				return;
			}
			//it's actually in the BST
			
		}
		else{
			//not in the BST
			throw new Error("not in BST tree");
		}
		// three cases to consider when deleting a node.
	}
	/**
	 * searches the BST to find the "value"
	 * @param  {[type]} value [value that the user is looking for]
	 * @return {[Treenode]}       [returns TreeNode if found, else returns null.]
	 */
	traversal(value, NextValue = this.root){
		if(NextValue.data == value){
			// console.log("found it!");
			return NextValue;
		}
		else{
			if(value < NextValue.data && NextValue.leftChild != null){
				// console.log("going to the left child");
				return this.traversal(value, NextValue.leftChild);
			}
			else if(value > NextValue.data && NextValue.rightChild != null){
				// console.log("going to the right child");
				return this.traversal(value, NextValue.rightChild);
			}
			else{
				return null;
			}
		}
	}
	/**
	 * helper function to find the place to insert and insert.
	 * @param  {TreeNode} nodeTobeInserted [node to be inserted from the insert function]
	 * @param  {TreeNode} nodePointer      [node to be compared to find the right place to insert the node]
	 * @return {[type]}                  [returns nothing]
	 */
	
	/**
	 * helper function to find the minimum valued node from the right subtree;
	 * @param  {[type]} node [description]
	 * @return {[type]}      [description]
	 */
	findMinfromRightSub(node = this.root){
		let current = node.rightChild;
		while(current.leftChild !=null){
			current = current.leftChild;
		}
		return current;
	}
}

function findPlace(nodeTobeInserted, nodePointer){
	if (nodeTobeInserted.data < nodePointer.data) {
		if(nodePointer.leftChild == null){
			nodePointer.leftChild = nodeTobeInserted;
			nodeTobeInserted.parent = nodePointer;
		}
		else{
			findPlace(nodeTobeInserted, nodePointer.leftChild);
		}
	}
	else{
		if(nodePointer.rightChild == null){
			nodePointer.rightChild = nodeTobeInserted;
			nodeTobeInserted.parent = nodePointer;
		}
		else{
			findPlace(nodeTobeInserted, nodePointer.rightChild);
		}
	}
}