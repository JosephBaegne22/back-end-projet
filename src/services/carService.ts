import WebSocket from 'ws';

class CarService {
    private ws: WebSocket | null = null;

    constructor() {
        this.connect();
    }

    private connect() {
        this.ws = new WebSocket('ws://car-controller-api.local');
        
        this.ws.on('open', () => {
            console.log('Connected to the car controller WebSocket server');
        });

        this.ws.on('close', () => {
            console.log('Disconnected from the car controller WebSocket server');
            // Optionally, you can try to reconnect after a certain interval
        });

        this.ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });

        this.ws.on('message', (message) => {
            console.log('Received message:', message.toString());
        });
    }

    start() {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ action: 'start' }));
            console.log('Sent start command');
        } else {
            console.error('WebSocket is not open');
        }
    }

    stop() {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ action: 'stop' }));
            console.log('Sent stop command');
        } else {
            console.error('WebSocket is not open');
        }
    }

    control(direction: string, speed: number) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ action: 'control', direction, speed }));
            console.log(`Sent control command: direction=${direction}, speed=${speed}`);
        } else {
            console.error('WebSocket is not open');
        }
    }
}

export default new CarService();
