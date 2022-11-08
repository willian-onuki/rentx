import Speed from '../assets/speed.svg';
import Acceleration from '../assets/acceleration.svg';
import Force from '../assets/force.svg';
import Gasoline from '../assets/gasoline.svg';
import Electric from '../assets/energy.svg';
import Hybrid from '../assets/hybrid.svg';
import Exchange from '../assets/exchange.svg';
import People from '../assets/people.svg';

export function getAccessories(type: string) {
  switch (type) {
    case 'speed':
      return Speed;
    case 'acceleration':
      return Acceleration;
    case 'turning_diameter':
      return Force;
    case 'electric_motor':
      return Electric;
    case 'gasoline_motor':
      return Gasoline;
    case 'hybrid_motor':
      return Hybrid;
    case 'exchange':
      return Exchange;
    case 'seats':
      return People;
  }
}
