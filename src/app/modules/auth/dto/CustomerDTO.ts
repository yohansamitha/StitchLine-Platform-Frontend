export default class CustomerDTO {
  constructor(email: string, name: string, address: string, mobile: number, username: string, password: string, nic: string, employeeNumber: string, post: string) {
    this._email = email;
    this._name = name;
    this._address = address;
    this._mobile = mobile;
    this._username = username;
    this._password = password;
    this._nic = nic;
    this._employeeNumber = employeeNumber;
    this._post = post;
  }

  private _email: string;

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _address: string;

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  private _mobile: number;

  get mobile(): number {
    return this._mobile;
  }

  set mobile(value: number) {
    this._mobile = value;
  }

  private _username: string;

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  private _password: string;

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  private _nic: string;

  get nic(): string {
    return this._nic;
  }

  set nic(value: string) {
    this._nic = value;
  }

  private _employeeNumber: string;

  get employeeNumber(): string {
    return this._employeeNumber;
  }

  set employeeNumber(value: string) {
    this._employeeNumber = value;
  }

  private _post: string;

  get post(): string {
    return this._post;
  }

  set post(value: string) {
    this._post = value;
  }
}
