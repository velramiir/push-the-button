/**
 * Represents a player in the application.
 */
export interface Player {
  /**
   * Unique identifier for the player.
   */
  id: string

  /**
   * Username of the player, unique across the application.
   */
  username: string

  /**
   * Date when the player was created.
   */
  createdAt: Date

  /**
   * Date when the player was last updated.
   */
  updatedAt: Date
}

/**
 * Represents a room in the application.
 */
export interface Room {
  /**
   * Unique identifier for the room.
   */
  id: string

  /**
   * Randomly generated 4-character code for the room.
   */
  code: string

  /**
   * Date when the room was created.
   */
  createdAt: Date

  /**
   * Date when the room was last updated.
   */
  updatedAt: Date
}
