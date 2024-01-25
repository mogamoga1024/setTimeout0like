(function() {
    const UP = 0;
    const RIGHT = 1;
    const DOWN = 2;
    const LEFT = 3;

    const Screen = function(width, height, _scale, canvas) {
        canvas.width = width * _scale;
        canvas.height = height * _scale;
        
        let scale = _scale;
        let context = canvas.getContext("2d", {willReadFrequently: true, alpha: false});
        this.width = width;
        this.height = height;
        let virtualBaseX = (width * scale - canvas.width) / 2;
        let virtualBaseY = (height * scale - canvas.height) / 2;
        
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        this.draw = function(x, y, color) {
            context.fillStyle = color;
            context.fillRect(x * scale - virtualBaseX, y * scale - virtualBaseY, scale, scale);
        };
        
        this.color = function(x, y) {
            let imageData = context.getImageData(x * scale - virtualBaseX, y * scale - virtualBaseY, 1, 1);
            let color = "#";
            for (let i = 0; i < 3; i++) color += ("0" + imageData.data[i].toString(16)).substr(-2);
            return color;
        };
        
        this.clear = function() {
            context.fillStyle = "#ffffff";
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
    };

    const Ant = function(_screen, _pattern) {
        const pattern = _pattern;
        const screen = _screen;
        let x = Math.floor(screen.width / 2);
        let y = Math.floor(screen.height / 2);
        let front = UP;
        let steps = 800;
        
        this.move = function() {
            for (let i = 0; i < steps; i=(i+1)|0) {
                let color = screen.color(x, y);
                for (let j = 0; j < pattern.length; j++) {
                    if (color == pattern[j].color) {
                        if (pattern[j].direction == RIGHT) {
                            front = (front + 1) % 4;
                        }
                        else if (pattern[j].direction == LEFT) {
                            front = (front + 3) % 4;
                        }
                        else {
                            alert("???");
                        }
                        screen.draw(x, y, pattern[(j + 1) % pattern.length].color);
                        break;
                    }
                }
                switch(front) {
                    case UP   : y--; break;
                    case LEFT : x--; break;
                    case DOWN : y++; break;
                    case RIGHT: x++; break;
                    default   : alert("??");
                }
                
                if (x < 0) {
                    x = screen.width - 1;
                }
                else if (x >= screen.width) {
                    x = 0;
                }
                else if (y < 0) {
                    y = screen.height - 1;
                }
                else if (y >= screen.height) {
                    y = 0;
                }
            }
        };
    };

    const START = 0;
    const PLAY = 1;
    const STOP = 2;

    const TuringMachine = function(_screen) {
        let self = this;
        
        const colors = [
            "#ffffff", "#000000", "#00ff00", "#ff0000", "#0000ff",
            "#114514", "#377777", "#364364", "#512810", "#816714",
            "#c0ffee"
        ];
        this.maxColorCount = colors.length;
        let pattern = [];
        let screen = _screen;
        let delay = 100;
        let ant;
        let timer;
        self.state = START;
        
        self.addPattern = function(direction) {
            if (pattern.length === colors.length) return;
            pattern.push({direction: direction, color: colors[pattern.length]});
        };
        
        self.deletePattern = function() {
            pattern.pop();
        }
        
        self.play = function() {
            if (self.state === START || self.state === STOP) {
                timer = setInterval(
                    function() {
                        switch (self.state) {
                            case START:
                                if (pattern.length === 0) {
                                    clearInterval(timer);
                                    break;
                                }
                                ant = new Ant(screen, pattern);
                                self.state = PLAY;
                                break;
                            case PLAY:
                                ant.move();
                                break;
                            case STOP:
                                self.state = PLAY;
                                break;
                        }
                    },
                    delay
                );
            }
        }
        
        self.stop = function() {
            clearInterval(timer);
            self.state = STOP
        }
        
        self.reset = function() {
            clearInterval(timer);
            screen.clear();
            self.state = START;
        }
    };

	const width = 400;
	const height = 250;
	const scale = 2;
	const canvas = document.getElementById("canvas");
	const screen = new Screen(width, height, scale, canvas);
	const tm = new TuringMachine(screen);

    // lrrrrlllrrr
    tm.addPattern(LEFT);
    tm.addPattern(RIGHT);
    tm.addPattern(RIGHT);
    tm.addPattern(RIGHT);
    tm.addPattern(RIGHT);
    tm.addPattern(LEFT);
    tm.addPattern(LEFT);
    tm.addPattern(LEFT);
    tm.addPattern(RIGHT);
    tm.addPattern(RIGHT);
    tm.addPattern(RIGHT);

    // lrrrrrllrll
    // tm.addPattern(LEFT);
    // tm.addPattern(RIGHT);
    // tm.addPattern(RIGHT);
    // tm.addPattern(RIGHT);
    // tm.addPattern(RIGHT);
    // tm.addPattern(RIGHT);
    // tm.addPattern(LEFT);
    // tm.addPattern(LEFT);
    // tm.addPattern(RIGHT);
    // tm.addPattern(LEFT);
    // tm.addPattern(LEFT);

    tm.play();
})();
