interface DomainObject {
  id: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Represents a player in the application.
 */
export interface Player extends DomainObject {
  /**
   * Name of the player, not unique across the application.
   */
  name: string
}

/**
 * Represents a room in the application.
 */
export interface Room extends DomainObject {
  /**
   * Randomly generated 4-character code for the room.
   */
  code: string
}
