#clone repo with submoules

1. Clone the parent repo first time:
    run cmd:
        ```git clone --recurse-submodules -j8 [your git repo url]```
    
2. Already clone parent repo:

    move to child repo folder
    run cmd:
        ```git submodule update --init --recursive```