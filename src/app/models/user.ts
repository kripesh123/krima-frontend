import { Photo } from './photo';
import {Role} from './role';

export class User {
  public userId: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public userName: string;
  public password: string;
  public role: Set<Role>;
  public created: Date;
  public photoList : Photo[];
  public likedPhotoList: Photo[];
}
