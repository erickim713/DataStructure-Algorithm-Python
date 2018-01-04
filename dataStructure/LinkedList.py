

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add(self, element):
        elementToBeAdded = Node(element)
        if(self.isEmpty()):
            self.head = elementToBeAdded
            self.last = elementToBeAdded
        else:
            self.last.setNext(elementToBeAdded)
            self.last = elementToBeAdded

    def remove(self, element):
        """removes the selected element in the linked list. first element that's seen
        
        Arguments:
            element {[any]} -- [element that the user wants to delete from the linked list]
        
        Returns:
            [Boolean] -- [True if delete was successful, else False]
        """

        currentNodePointer = self.head
        # case where the first node has the element as value then erase the value
        if(currentNodePointer.getData() == element):
            self.head = self.head.getNext()
            return True
        
        while(currentNodePointer.getNext() is not None):
            if(currentNodePointer.getNext().getData() == element):
                currentNodePointer.setNext(currentNodePointer.getNext().getNext())
                return True
            else:
                currentNodePointer = currentNodePointer.getNext()
        return False
        

    def traverse(self):
        currentNodePointer = self.head
        while(currentNodePointer is not None):
            print(currentNodePointer.getData())
            currentNodePointer = currentNodePointer.getNext()
        return
    
    def isEmpty(self):
        return self.head == None


class Node:
    # in python you cannot have multiple constructors,
    # so you should use default values in constructors when you can
    def __init__(self, value = 0):
        """constructor for node
        
        Keyword Arguments:
            value {[any type]} -- [value for the node to store] (default: {0})
        """

        self.value = value
        self.next = None # python has something called singleton None
    def getData(self):
        return self.value

    def getNext(self):
        return self.next

    def setData(self, newValue):
        self.value = newValue

    def setNext(self, newNext):
        self.next = newNext
